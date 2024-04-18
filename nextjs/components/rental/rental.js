import React from 'react'
import styles from './rental.module.css'
import { BsBox } from 'react-icons/bs'
import { PiBaseballLight } from 'react-icons/pi'
import { RiShoppingCartLine } from 'react-icons/ri'
import { FaHeart } from 'react-icons/fa'
import { FaRegUserCircle } from 'react-icons/fa'

export default function Rental() {
  return (
    <>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">所有商品</li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="#">棒球手套</a>
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-6 ">
            {/* 商品圖片 */}
            <figure className={`${styles['product-image']}`}>
              <img src="/images/logo.png" className="img" alt="..." />
            </figure>
            {/*選擇商品顏色*/}
            <div className={`${styles['color-options']}`}>
              <img src="/images/logo.png" alt="Color Option 1" />
              <img src="/images/logo.png" alt="Color Option 2" />
              <img src="/images/logo.png" alt="Color Option 2" />
              <img src="/images/logo.png" alt="Color Option 2" />
              {/* 可以添加更多顏色選項 */}
            </div>
          </div>
          <div className="col-6">
            <div className="col-1 text-center mb-3">
              <div className="border border-danger d-inline-block">
                <h6 className="text-danger m-0 p-2">mizuno</h6>
              </div>
            </div>
            <div className="">
              <h4>棒壘球鞋 WAVE LIGHTREVO</h4>
            </div>
            <div className="row align-items-end mt-3">
              <div className="col-3">
                <h3>$1880 / 1天</h3>
              </div>
              <div className="col text-decoration-line-through">
                <h6 className="">$1880</h6>
              </div>
            </div>
            {/*商品規格*/}
            <div className="row mt-3">
              <div className="col-md-6 mb-2">
                <label htmlFor="inputState" className="form-label ">
                  <h6>顏色</h6>
                </label>
                <select id="inputState" className="form-select rounded-0">
                  <option selected="">請選擇顏色</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputState" className="form-label">
                  <h6>尺寸</h6>
                </label>
                <select id="inputState" className="form-select rounded-0">
                  <option selected="">請選擇尺寸</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="inputState" className="form-label">
                  <h6>租借時間</h6>
                </label>
                <select id="inputState" className="form-select rounded-0">
                  <option selected="">請選擇日期區間</option>
                  <option>...</option>
                </select>
              </div>

              <div className="input-group  mt-3 ">
                <label htmlFor="inputState" className="form-label">
                  <h6>數量</h6>
                </label>
                <button
                  className="btn btn-outline-secondary rounded-0"
                  type="button"
                  id="plus-btn"
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control "
                  placeholder="1"
                  aria-label="1"
                  aria-describedby="basic-addon2"
                  id="quantity-input"
                />
                <button
                  className="btn btn-outline-secondary rounded-0"
                  type="button"
                  id="minus-btn"
                >
                  +
                </button>
              </div>
              {/*購物按鈕*/}
              <div
                className="btn-group col-md-12 mt-3"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" className="btn btn-danger rounded-0 d-flex align-items-center justify-content-center ">
                  <RiShoppingCartLine
                    style={{ color: 'var(--gray-light  )' }}
                  />
                  <span className="ms-2">加入購物車</span>
                </button>
              </div>
              <div
                className="btn-group col-md-12 mt-3 "
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" className="btn btn-dark rounded-0 d-flex align-items-center justify-content-center">
                  <FaHeart style={{ color: 'var(--gray-light)' }} />
                  <span className="ms-2">收藏商品</span>
                </button>
              </div>
              {/*資訊*/}
              <div>
                <div className='row'>
                  <div className='col-1'>
                    <p>免運</p>
                  </div>
                  <div className='col'>
                    <p>滿 5000 元即享免運</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*商品介紹跟更多類似*/}

          <div className="col-md-6 mt-3">
            <h5 className="">
              <PiBaseballLight style={{ color: 'var(--main)' }} />
              商品介紹
            </h5>
            <hr />
            <p>
              材質- <br />
              鞋面：人工皮革 <br />
              大底：射出成型大底 <br />
              重量- 約290g(27.0cm單腳) <br />
              產地- 柬埔寨 <br />
              上市月份- 2023年 8月 <br />
              《注意事項》
              <br />
              ※ 此商品可退換，詳情請參閱退換貨規則 <br />
              ※ 商品展示顏色依實際販售狀況為主 <br />
              ※ 商品物質特性不同，可能會有約1-2cm前後的誤差。 <br />※
              依據商品款式、版型、材質、設計等，同樣尺寸於不同商品可能會有所差異{' '}
              <br />
              購物須知 <br />
              寄送時間 : 全年無休，週末假日照常出貨 <br />
              送貨方式 : 透過宅配送達。除網頁另有特別標示外，均為常溫配送。{' '}
              <br />
              送貨範圍 :
              限台灣本島與離島地區註，部分離島地區包括連江馬祖、綠島、蘭嶼、琉球鄉…等{' '}
              <br />
            </p>
            <div>
              <h5>
                <BsBox style={{ color: 'var(--main)' }} />
                商品評價
              </h5>

              <hr />
              <div className="card">
                <div className="card-body">
                  <div className="qqq">
                    <div className="peo">
                      <img src="" alt="" />
                    </div>
                    <div className="nam">
                      <h5 className="card-title">abc***@***</h5>
                      <h5 className="card-title">2024/11/11</h5>
                    </div>
                    <div className="ms-auto ">
                      <i className="fa-solid fa-star text-danger" />
                      <i className="fa-solid fa-star text-danger" />
                      <i className="fa-solid fa-star text-danger" />
                      <i className="fa-solid fa-star text-danger" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <p className="card-text">
                    版型不錯，但穿起來偏硬，個人較不習慣。有穿去慢跑、打網球，鞋墊的緩衝力很好。
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*更多相似商品*/}
          <div className="col-md-6 mt-3">
            <h5>更多相似商品</h5>
            <hr />
            <div className="row row-cols-4 row-cols-md-4 g-4">
              <div className="col">
                <div className="card">
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      mizuno || 棒壘球鞋 WAVE LIGHTREVO
                    </h5>
                    <p className="card-text">$1880</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-4 row-cols-md-4 g-4 mt-1">
              <div className="col">
                <div className="card">
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      mizuno || 棒壘球鞋 WAVE LIGHTREVO
                    </h5>
                    <h6 className="card-text">$1880</h6>
                    <p>$1880</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
