import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateHomeAction } from '../../store/actions';
import { formatDate, getLastMonthDate } from '../../utils/helperFunc';

const useHome = () => {
  const isFocused = useIsFocused();

  const dispatch = useDispatch();
  const home = useSelector(state => state.app.home);
  const timeline = useSelector(state => state.app.timeline);

  useEffect(() => {
    if (isFocused) {
      if (!timeline.length) {
        return;
      }

      let cost = { curr: 0.0, prev: 0.0 };

      if (
        formatDate(timeline[0].lastUpdateDate, 'MM YYYY') ===
        formatDate(Date.now(), 'MM YYYY')
      ) {
        cost.prev = 0.0;
        cost.curr = timeline[0].totalCost;
      } else if (
        formatDate(timeline[0].lastUpdateDate, 'MM YYYY') === getLastMonthDate()
      ) {
        cost.prev = timeline[0].totalCost;
        cost.curr = 0.0;
      }

      if (
        timeline[1]?.lastUpdateDate &&
        formatDate(timeline[1].lastUpdateDate, 'MM YYYY') === getLastMonthDate()
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
    }
  }, [dispatch, home.gas, timeline, isFocused]);

  return { home };
};

export default useHome;
