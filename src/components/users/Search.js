import React from 'react'

const Search = (props) => {
    return (
        <div>
            <div class="container d-flex justify-content-center">
                <div class="card mt-5 p-4">
                    <div class="input-group mb-3"> <input type="text"
                    placeholder="Search for..."
                    onChange={(event)=>props.callback(event.target.value)}
                    class="form-control"/>
                    <div class="input-group-append">
                        <button class="btn btn-primary big-button">
                            <i class="fas fa-search"></i>
                            Search
                            </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Search

