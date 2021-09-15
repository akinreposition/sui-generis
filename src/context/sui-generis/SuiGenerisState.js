import React, { useReducer } from 'react';
// import Axios from 'axios';
import suiGenerisContext from './suiGenerisContext';
import { suiGenerisReducer } from './suiGenerisReducer';
import {    SEARCH_NATIVES,
            SET_LOADING,
            // SET_SEARCH_FIELD
        } from '../types'
import { nativesInfo } from '../../components/natives/helper';

const SuiGenerisState = props => {
    const initState = {
        // natives: [],
        natives: nativesInfo,
        searchField: '',
        loading: false
    }

    const [ state, dispatch] = useReducer (suiGenerisReducer, initState);

    // Set SearchField
    // const onSearchChange = (e) => {
    //     e.preventDefault();
    //     console.log(e)
    //     // this.setState = ({[e.target.searchField] : e.target.value});
    //     dispatch({ 
    //         type: SET_SEARCH_FIELD,
    //         payload:  this.setState({searchField : e.target.value})
    //     });
    // }

    // Search Native
    const searchNative = async text => {
        // setLoading();
        const { natives, searchField } = initState;
        // const response = await axios.get(``)    // paste endpoint here
        const filteredNatives =  natives.filter(native => { 
            return native.name.toLowerCase().includes(searchField.toLowerCase())
        });
        dispatch({
            type: SEARCH_NATIVES,
            payload: filteredNatives
        });
    }


    //  Set Loading
    const setLoading = () => dispatch ({ type: SET_LOADING});

    // const onSearchChange = (e) => ({ searchField : e.target.value});

    return(
        <suiGenerisContext.Provider
        value={{
            natives: state.natives,
            searchField: state.searchField,
            loading: state.loading,
            searchNative,
            // onSearchChange,
            setLoading,
        }}
        >
            {props.children}
        </suiGenerisContext.Provider>
    );
}

export default SuiGenerisState;