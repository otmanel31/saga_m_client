 import fetchMock from 'fetch-mock'

export default () => {
    console.log('MOCK : fetch')
    // Mock the fetch() global to always return the same value for GET
    // requests to all URLs.
    fetchMock.post('http://localhost:4000/auth/getToken/', { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ' })

}