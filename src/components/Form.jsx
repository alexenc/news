
import styles from './Form.module.css'
import useSelect from '../hooks/useSelect';

const Form = () => {


    //custom hhok

    const[category, SelectNews] = useSelect()

    return ( 
        <div className={` ${styles.searcher} row`} >
            <div className="col s12 m8 offset-m2">
                <form action="">
                    <h2 className={styles.heading}>Find news by category</h2>
                    <SelectNews/>

                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="search"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Form;