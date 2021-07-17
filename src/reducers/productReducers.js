import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_FEATURED_PRODUCTS_FAIL,
  PRODUCT_FEATURED_PRODUCTS_REQUEST,
  PRODUCT_FEATURED_PRODUCTS_SUCCESS,
  PRODUCT_DETAILS_RESET,
  PRODUCT_LIST_RESET,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_FAIL,
  PRODUCT_TOP_SUCCESS,
} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, ...state }

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }

    case PRODUCT_LIST_RESET:
      return { loading: false, products: [] }
    default:
      return state
  }
}

export const productFeaturedReducer = (
  state = { featuredProducts: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_FEATURED_PRODUCTS_REQUEST:
      return { loding: true, ...state }

    case PRODUCT_FEATURED_PRODUCTS_SUCCESS:
      return { loding: false, featuredProducts: action.payload }

    case PRODUCT_FEATURED_PRODUCTS_FAIL:
      return { loding: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { productDetails: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }

    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, productDetails: action.payload }

    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    case PRODUCT_DETAILS_RESET:
      return { loading: false, productDetails: {} }
    default:
      return state
  }
}

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true }

    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true }

    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true }

    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }

    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true }
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_UPDATE_RESET:
      return {}
    default:
      return state
  }
}

export const productCreateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true }
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true }
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_CREATE_REVIEW_RESET:
      return {}
    default:
      return state
  }
}

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] }

    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload }

    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}