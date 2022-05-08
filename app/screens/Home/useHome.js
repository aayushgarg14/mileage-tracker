import { useIsFocused } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateHomeAction } from '../../store/actions';
import {
  formatDate,
  getDateFromNow,
  getLastMonthDate,
} from '../../utils/helperFunc';

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

      updateHomeApi();
    }
  }, [updateHomeApi, timeline, isFocused]);

  const updateHomeApi = useCallback(() => {
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
        gas: {
          ...home.gas,
          data: home.gas.data.map(each =>
            each.type === 'lastUpdate'
              ? {
                  ...each,
                  name: `${formatDate(
                    each.lastUpdateDate,
                    'YYYY-MM-DD',
                  )} • ${getDateFromNow(
                    formatDate(each.lastUpdateDate, 'DD MM YYYY') ===
                      formatDate(Date.now(), 'DD MM YYYY')
                      ? each.lastUpdateTimestamp
                      : each.lastUpdateDate,
                  )}`,
                }
              : each,
          ),
        },
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
                          displayValue: cost.curr.toFixed(2),
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
                          displayValue: cost.prev.toFixed(2),
                        }
                      : category,
                  ),
                }
              : each,
          ),
        },
      }),
    );
  }, [timeline, home, dispatch]);

  return { home };
};

export default useHome;
