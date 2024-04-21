import React from 'react'
import styles from './productlist.module.css'
import { AiFillHeart } from 'react-icons/ai'
import { GoTriangleLeft } from 'react-icons/go'
import { GoTriangleRight } from 'react-icons/go'

export default function Productlist() {
  return (
    <>
      <div className={`${styles['bi']}`}></div>
      <div className="container">
        <div className="row">
          {/* 篩選商品分類 */}
          <div className={`col-2 ${styles['left-half']}`}>
            <h6>商品分類</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                棒球
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                球
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                帽子
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                球衣
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                手套
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                球褲
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                襪子
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                球鞋
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                裝備
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                護具
              </label>
            </div>
            <hr />
            {/* 篩選品牌分類*/}
            <h6>品牌分類</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                ASICS
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                BRETT
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                FILA
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                MIZUNO
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                New Balance
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Nike
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                OAKLEY
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                UNDER ARMOUR
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                SSK
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                ZETT
              </label>
            </div>
            <hr />
            {/* 篩選顏色分類*/}
            <h6>顏色分類</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                黑
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                白
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                紅
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                黃
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                藍
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                綠
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                橘
              </label>
            </div>
            <hr />
          </div>
          <div className="col">
            <div
              className={`d-flex justify-content-between ${styles['u-right']}`}
            >
              <h4>棒球手套</h4>
              <div className="d-flex flex-column">
                <form className="d-flex " role="search">
                  <input
                    className={`form-control ${styles['fc']}`}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className={`btn ${styles['sc']}`} type="submit">
                    <span className={`${styles['bt']}`}>搜尋</span>
                  </button>
                </form>
                <div className="d-flex justify-content-end mt-3">
                  <div className={`${styles['hm']}`}>共???件商品</div>
                  <label htmlFor="card"></label>
                  <select id="card" name="usercard">
                    <option value="" selected>
                      排序
                    </option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row row-cols-2 row-cols-md-4 g-4 mb-4 mt-4">
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    棒壘手套 內野 密網 紅白 左投手套
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-2 row-cols-md-4 g-4 mb-4">
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-2 row-cols-md-4 g-4 mb-4">
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-2 row-cols-md-4 g-4 mb-4">
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-2 row-cols-md-4 g-4 mb-4">
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${styles['cs']}`}>
                  <img
                    src="/images/logo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    mizuno || 棒壘球鞋 WAVE LIGHTREVO
                  </h5>
                  <h6 className={`card-text ${styles['save']}`}>$1880</h6>
                  <div className={`${styles['ti']}`}>
                    <p className={`${styles['pt']}`}>$1880</p>
                    <AiFillHeart
                      style={{ color: 'var(--main  )', fontSize: '1.5rem' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <nav aria-label={`Page navigation example${styles['bp']}`}>
              <ul className="pagination justify-content-center">
                <li className={`page-item ${styles['p-item']}`}>
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <GoTriangleLeft />
                    </span>
                  </a>
                </li>
                <li className={`page-item ${styles['p-item']}`}>
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className={`page-item ${styles['p-item']}`}>
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className={`page-item ${styles['p-item']}`}>
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className={`page-item ${styles['p-item']}`}>
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className={`page-item ${styles['p-item']}`}>
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className={`page-item ${styles['p-item']}`}>
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <GoTriangleRight />
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
