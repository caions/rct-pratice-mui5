import { DenseTable } from './components/Table';
import styles from './style.module.css';

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <DenseTable />
      </div>
    </>
  );
};

export default App;
