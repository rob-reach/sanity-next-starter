import JSONPretty from 'react-json-pretty'

const SanityStarterData = ({data}) => {
    return (
        <div className="my-8">
            <h2>Sanity Starter data</h2>
            <JSONPretty style={{ maxWidth: "100ch",maxHeight: '500px', overflowX: "scroll", boxShadow: "0 0 5px rgba(0,0,0,.3" }} id="json-pretty" data={data}></JSONPretty>
        </div>
    )
}

export default SanityStarterData
