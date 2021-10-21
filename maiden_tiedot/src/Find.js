const Find = ({ find, findChange }) => {
    return (
        <div>
            find countries <input value={find} onChange={findChange} />
        </div>
    )
}

export default Find;