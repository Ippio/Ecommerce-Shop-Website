import styled from 'styled-components'

export const LaptopGamingWrapper = styled.div`
    margin: 0 100px;
    .bg-title {
        margin-bottom: 25px;
    }
    .bg-title img {
        width: 100%;
    }
    `
export const ContentLapTopWrapper = styled.div`
background-image: url('/assets/images/bg-all.png');
width: 100%;
border-radius: 5px;
background-repeat: no-repeat;
background-size: cover;
height: auto;
display: flex;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
flex-direction: column;
align-items: center;
.image {
    width: 700px;
    height: 150px;
    margin-top: 15px;
    margin: 0 auto;
}
.image img {
    width: 100%;
    object-fit: cover;
}
.list-product {
    margin: 10px 70px;
    height: auto;
    display: flex;
    margin-bottom: 50px;
    justify-content: space-between;
}
.product-item {
    width: calc((100% - 50px) /4);
    height: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius: 5px;
}
.product-item:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}
.image {
    width: 70%;
    height: auto;
    object-fit: cover;
    margin-top: 30px;
}
.title {
    font-size: 1.3rem;
    display: flex;
    margin-top: 20px;
    justify-content: center;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
}
.content {
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
}
.sale-laptop {
    width: 55%;
    margin-bottom: 70px;
}
.sale-laptop img {
    width: 100%;
    object-fit: cover;
}
`