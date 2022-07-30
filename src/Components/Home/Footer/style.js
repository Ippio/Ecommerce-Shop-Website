import styled from 'styled-components'

export const FooterWrapper = styled.div`
    .footer {
         display: flex;
         margin: 0 100px;
    }
    .left {
        display: flex;
        justify-content: space-between;
        width: 50%;
    }
    ul {
    list-style-type: none;
    }
    li {
        padding-top: 10px;
    }
    li a {
        text-decoration: none;
        color: #3399d2;
        font-size: 14px;
    }
    li a:hover {
        text-decoration: underline;
        color: black;
    }
    .right {
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
        margin-left: 50px;
    }
    .right .top {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        line-height: 30px;
    }
    .title-f {
        font-size: 17px;
        font-weight: 700;
    }
    .title-c {
        font-size: 20px;
        font-weight: 700;
        color: red;
    }
    .bottom {
        font-size: 16px;
        line-height: 30px;
    }

`