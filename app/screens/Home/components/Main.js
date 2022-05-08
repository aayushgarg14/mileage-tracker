/* eslint-disable react-native/no-inline-styles */
import React, { Fragment } from 'react';
import { ScrollView, View } from 'react-native';
import {
  CardBasic,
  CardHeader,
  EmptyBasic,
  TextBasic,
  TextRow,
} from '../../../components';
import { GenericStyles } from '../../../utils/GenericStyles';
import useHome from '../useHome';

const Main = () => {
  const { home } = useHome();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* GAS */}
      {home?.gas ? (
        <>
          <CardHeader data={home.gas} />
          <CardBasic>
            {home.gas.data?.map((item, index) =>
              item.name ? (
                <Fragment key={item.id}>
                  {index !== 0 ? <View style={GenericStyles.mb16} /> : null}
                  <TextRow data={item} />
                </Fragment>
              ) : null,
            )}
          </CardBasic>
        </>
      ) : null}

      {/* COSTS */}
      {home?.costs ? (
        <View style={GenericStyles.mt16}>
          <CardHeader data={home.costs} />
          <CardBasic>
            {home.costs.data?.map((item, index) => (
              <Fragment key={item.id}>
                <View style={GenericStyles.mb8}>
                  <TextBasic text={item.title} isLight isSmall />
                </View>
                {item.data.map(each => (
                  <Fragment key={each.id}>
                    <TextRow data={each} />
                    {home.gas.data.length - 1 > index ? (
                      <View style={GenericStyles.mb16} />
                    ) : null}
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </CardBasic>
        </View>
      ) : null}

      {/* LAST ENTRIES */}
      {home?.entries ? (
        <View style={GenericStyles.mt16}>
          <CardHeader data={home.entries} />
          <CardBasic>
            {home.entries.data.length ? (
              home.entries.data.map((item, index) => (
                <Fragment key={item.id}>
                  <View style={GenericStyles.mb8}>
                    <TextBasic
                      text={item.heading}
                      isLight
                      isSmall
                      textStyle={{ textTransform: 'uppercase' }}
                    />
                  </View>
                  <TextRow data={item} />
                  {home.entries.data.length - 1 > index ? (
                    <View style={GenericStyles.mb16} />
                  ) : null}
                </Fragment>
              ))
            ) : (
              <EmptyBasic />
            )}
          </CardBasic>
        </View>
      ) : null}

      <View style={{ height: 60 }} />
    </ScrollView>
  );
};

export default Main;
