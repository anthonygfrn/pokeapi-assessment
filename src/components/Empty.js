import styled from '@emotion/styled';

export function Empty() {
    return (
        <EmptyStyles>
            <EmptyText>No Pokemon Yet</EmptyText>
        </EmptyStyles>
    )
}

const EmptyStyles = styled.div`
    background-color: #e3e5dd;
    padding: 5px;
    height: 250px;
    width: 100%;
    border-radius: 25px;
    max-width: 500px;
    align-self: center;
    text-align: center;
`

const EmptyText = styled.h3`
    margin-top: 120px;
`