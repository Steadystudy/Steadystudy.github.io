---
emoji: 📓
title: typescript에서 json파일 불러올 때 타입 오류
date: 2023-01-22 02:08
author: Steadystudy
tags: D3, typescript, 트러블 슈팅
categories: D3
---

## 문제의 발단

topojson의 feature메서드를 통해 TopoJSON 데이터를 변환해 GeoJSON으로 반환하는 과정에서 type error가 발생했다.

```
import korea from './topoKorea.json';
import { feature } from 'topojson-client';

function getGeoJSONData() {
  return feature(korea, korea.objects['skorea_provinces_2018_geo']).features;
}

console.log(getGeoJSONData())
```

(콘솔 값은 제대로 나오지만, korea 타입에 에러가 발생한다.)

## 이유

TypeScript에서 JSON을 가져오면 타입을 자동으로 유추하지만 @types/topojson은 여러 가지 이유로 자동 타입이 되지 않고 충돌하는 것으로 보입니다.

## 해결

올바른 타입으로 캐스팅하기 전에 unknown으로 먼저 캐스팅했습니다.

```
import korea from './topoKorea.json';
import { feature } from 'topojson-client';
import { GeometryObject, Topology } from 'topojson-specification';
import { FeatureCollection } from 'geojson';

function getGeoJSONData() {
  const featureCollection = feature(
    korea as unknown as Topology,
    korea.objects['skorea_provinces_2018_geo'] as GeometryObject,
  ) as FeatureCollection;
  return featureCollection.features;
}
```

## 참고문서

https://stackoverflow.com/questions/60367284/how-to-resolve-typescript-error-for-topojson-package
