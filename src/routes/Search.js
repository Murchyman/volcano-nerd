import DataTable from '../Components/DataTable';
import { useEffect, useState } from 'react';
import styles from '../styles/Search.module.css';
function Search() {

  useEffect(() => {
    GetData();
  }, []);

  const [data, setData] = useState([]);
const [isloding, setIsloding] = useState(true);
  const GetData = () => {
    fetch('http://openlibrary.org/subjects/cooking.json')
      .then(response => response.json())
      .then(json => {
        setData(json.works);
      })
      .then(() => {
        setIsloding(false);
      }
      );
  };
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
        <h1>The Books</h1>
        <DataTable Data={data} Loading={isloding} />
        </div>
    </div>
  );
}

export default Search;