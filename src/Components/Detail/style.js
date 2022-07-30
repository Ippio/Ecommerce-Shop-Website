import styled from 'styled-components'

export const DetailWrapper = styled.div`
    width: 100%;
    .detail-wrapper {
        margin: 0 100px;
    }
    .content-detail-product {
        display: flex;
    }
    .left-detail {
        width: 45%;
        border: 1px solid black;
        background-image: url('/assets/images/khung-detail.png');
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 100%;
    }
    .left-detail-image {
        width: 100%;
    }
    .left-detail img {
        margin: 120px auto;
        display: flex;
        justify-content: center;
    }
    .right-detail {
        flex-grow: 1;
        border: 1px solid black;
    }
`