import React from 'react';
import { commonHair, mythicHair } from "../../ImagesArrays/Hair/Hair"
// import { commonHair, uncommonHair, rareHair, mythicHair } from "../../ImagesArrays/Hair/Hair"


export const HairChart = () => (
  <div className="chart__item">
    <h2 className="chart__title">
      Hair
    </h2>
    <div className="chart__item-top">
      <div className="chart__item-name">
        Name
      </div>
      <div className="chart__item-percent">
        %
      </div>
      <div className="chart__item-rarity">
        Rarity
      </div>
    </div>
    <div className="chart__list chart__list--common">
      {commonHair.map((item, index) => [
        <div className="chart__list-item" key={index}>
          <div className="chart__list-item__img-box">
            <div className="chart__list-item__img img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
            <div className="chart__list-item__img-hover img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
          </div>
          <div className="chart__list-item__name">
            <p>{item.name}</p>
          </div>
          <div className="chart__list-item__number">
            <p>{item.number}</p>
          </div>
          <div className="chart__list-item__rare">
            <p>Common</p>
          </div>
        </div>
      ])}
    </div>
    {/* <div className="chart__list chart__list--uncommon">
      {uncommonHair.map((item, index) => [
        <div className="chart__list-item" key={index}>
          <div className="chart__list-item__img-box">
            <div className="chart__list-item__img img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
            <div className="chart__list-item__img-hover img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
          </div>
          <div className="chart__list-item__name">
            <p>{item.name}</p>
          </div>
          <div className="chart__list-item__number">
            <p>{item.number}</p>
          </div>
          <div className="chart__list-item__rare">
            <p>Uncommon</p>
          </div>
        </div>
      ])}
    </div> */}
    {/* <div className="chart__list chart__list--rare">
      {rareHair.map((item, index) => [
        <div className="chart__list-item" key={index}>
          <div className="chart__list-item__img-box">
            <div className="chart__list-item__img img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
            <div className="chart__list-item__img-hover img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
          </div>
          <div className="chart__list-item__name">
            <p>{item.name}</p>
          </div>
          <div className="chart__list-item__number">
            <p>{item.number}</p>
          </div>
          <div className="chart__list-item__rare">
            <p>Rare</p>
          </div>
        </div>
      ])}
    </div> */}
    <div className="chart__list chart__list--mythic">
      {mythicHair.map((item, index) => [
        <div className="chart__list-item" key={index}>
          <div className="chart__list-item__img-box">
            <div className="chart__list-item__img img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
            <div className="chart__list-item__img-hover img-wrap">
              <div><img src={item.img} alt={item.name} /></div>
            </div>
          </div>
          <div className="chart__list-item__name">
            <p>{item.name}</p>
          </div>
          <div className="chart__list-item__number">
            <p>{item.number}</p>
          </div>
          <div className="chart__list-item__rare">
            <p>Mythic</p>
          </div>
        </div>
      ])}
    </div>
  </div>
)
export default HairChart;