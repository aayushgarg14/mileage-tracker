import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateHomeAction } from '../../store/actions';
import { formatDayjs, getLastMonthDate } from '../../utils/helperFunc';

const useHome = () => {
  const dispatch = useDispatch();
  const home = useSelector(state => state.app.home);
  const timeline = useSelector(state => state.app.timeline);

  useFocusEffect(
    useCallback(() => {
      if (!timeline.length) {
        return;
      }

      console.log(
        formatDayjs(timeline[0].lastUpdateDate, 'MM YYYY'),
        formatDayjs(Date.now(), 'MM YYYY'),
        formatDayjs(timeline[0].lastUpdateDate, 'MM YYYY') ===
          formatDayjs(Date.now(), 'MM YYYY'),
        getLastMonthDate(),
      );

      let cost = { curr: 0.0, prev: 0.0 };

      if (
        formatDayjs(timeline[0].lastUpdateDate, 'MM YYYY') ===
        formatDayjs(Date.now(), 'MM YYYY')
      ) {
        cost.prev = 0.0;
        cost.curr = timeline[0].totalCost;
      } else if (
        formatDayjs(timeline[0].lastUpdateDate, 'MM YYYY') ===
        getLastMonthDate()
      ) {
        cost.prev = timeline[0].totalCost;
        cost.curr = 0.0;
      }

      if (
        timeline[1]?.lastUpdateDate &&
        formatDayjs(timeline[1].lastUpdateDate, 'MM YYYY') ===
          getLastMonthDate()
      ) {
        cost.prev = timeline[1].totalCost;
      }

      dispatch(
        updateHomeAction({
          costs: {
            ...home.costs,
            data: home.costs.data.map(each =>
              each.type === 'curr'
                ? {
                    ...each,
                    data: each.data.map(category =>
                      category.type === 'gas'
                        ? {
                            ...category,
                            value: cost.curr,
                            displayValue: `${cost.curr}`,
                          }
                        : category,
                    ),
                  }
                : each.type === 'prev'
                ? {
                    ...each,
                    data: each.data.map(category =>
                      category.type === 'gas'
                        ? {
                            ...category,
                            value: cost.prev,
                            displayValue: `${cost.prev}`,
                          }
                        : category,
                    ),
                  }
                : each,
            ),
          },
        }),
      );
    }, [dispatch, home.gas, timeline]),
  );

  return { home };
};

export default useHome;
