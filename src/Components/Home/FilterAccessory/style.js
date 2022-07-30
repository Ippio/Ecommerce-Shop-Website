import styled from 'styled-components'


export const FilterAccessoryWrapper = styled.div`
    width: 100%;
    margin: 50px 0;
`
export const ListFilterWrapper = styled.div`
    width: 100%;
    .list-filter {
        display: flex;
        margin: 0 100px;
        flex-wrap: wrap;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
`
export const FilterItemWrapper = styled.div`
    width: calc((100% / 8));
    display: flex;
    flex-direction: column;
    border: .5px solid #e6e6fa;
    .content-filter {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 15px;
        height: 100%;
        padding: 20px;
    }
    .content-filter:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
    .content-image {
        display: flex;
        font-size: 40px;
        margin-bottom: 10px;
    }
    .content-filter p {
        text-align: center;
    }
`