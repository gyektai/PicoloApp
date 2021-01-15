import { useEffect, useState } from 'react';
import decks from '../api/decks';

export default () => {
    const [results, setResults] = useState([]);

    const getDecks = async () => {
        const response = await decks.get('/decks');
        setResults(response.data);
    };

    return [getDecks, results];

};