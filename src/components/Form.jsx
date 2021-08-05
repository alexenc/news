
import styles from './Form.module.css'
import useSelect from '../hooks/useSelect';

const Form = ({setCategory}) => {

    const OPTIONS = [
        {value: 'general', label:'General'},
        {value: 'business', label:'Business'},
        {value: 'science', label:'Science'},
        {value: 'sports', label:'Sports'},
        {value: 'technology', label:'Tech'},
        {value: 'health', label:'Health'},
        {value: 'entertainment', label:'Entertainment'},
    ]

    //custom hhok
    const[category, SelectNews] = useSelect('general', OPTIONS)

    //send category to appjs
    const searchNews = e => {
        e.preventDefault()

        setCategory(category)
    }

    

    return ( 
        <div className={` ${styles.searcher} row`} >
            <div className="col s12 m8 offset-m2">
                <form 
                    onSubmit={searchNews}
                >
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