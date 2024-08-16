import { Input,ConfigProvider, Form } from "antd";
import { useUserQuery } from "../hooks/useQuery";
import { searchSchema } from "../utils/validation";
import { useNavigate } from "react-router-dom";
import '../assets/styles/search.scss'
import { useState } from "react";

function SearchForm() {

  const setValue = useUserQuery((state)=> state.setValue)
  const navigate = useNavigate()
  const [validError, setValidError] = useState(null)

  const searchSchemaYup = {
    async validator({ field }, value) {
      try{
        setValidError(null)
        searchSchema.validateSyncAt(field, { [field]: value });
      } catch (error){
        setValidError(error.message)
      }
    },
  };

  function onSearch (value, e) {
    if(validError){
      return false
    } else {
      setValue(value)
      navigate('/books')
    }
  }

  function submitH(e){
    e.preventDefault()
    console.log('sub')
  }

  return (
    <>
      <div className="search">
        <ConfigProvider
          theme={{
            token:{
              borderRadius:20
            },
            components: {
              Input:{
                paddingBlock:10,
                paddingInline:10,
              },
            },
          }}
        >
          <Form >
            <Form.Item
              name='searchQuery'
              rules={[searchSchemaYup]}
            >
              <Input.Search
                placeholder="Enter search text"
                enterButton={true}
                onSearch={onSearch}
                className="search__input"
              />
            </Form.Item>
              {validError && <p className="search__error">{validError}</p>}
          </Form>
        </ConfigProvider>
      </div>
    </>
  )
}

export default SearchForm;