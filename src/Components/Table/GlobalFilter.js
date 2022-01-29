import styled from 'styled-components';

const Input = styled.input`
    width: 30%;
    padding-left: 1%;
    color: black;
    font-size: 20px;
    margin-bottom: 2%;
    border: 1px solid rgb(68, 102, 242);
    border-radius: 8px;

    ::placeholder {
        text-align: left;
        padding-left: 4%;
    }

    :focus {
        outline-color: rgb(68, 102, 242);
    }
`;

export const GlobalFilter = ({ filter, setfilter }) => {
    return (
        <Input
            placeholder='search'
            value={filter || ''}
            onChange={e => setfilter(e.target.value)}
        />
    );
};