import { Pagination as AntPagination, ConfigProvider } from "antd"
import { usePagination} from "../hooks/usePagination"
import '../assets/styles/pagination.scss'

function Pagination() {

  const page = usePagination((state)=>state.page)
  const limit = usePagination((state)=>state.limit)
  const setPage = usePagination((state)=>state.setPage)
  const setLimit = usePagination((state)=>state.setLimit)

  function limitHandler (current, pageSize) {
    setLimit(pageSize)
  }
  function pageHandler (page, pageSize) {
    setPage(page)
  }

  return (
    <>
      <ConfigProvider
      theme={{
        token:{
          colorText:'#012869',
          colorPrimary:'#012869',
          colorBgContainer:'transparent',
          colorBorder:'#012869',
        },
        components: {
          Pagination: {
            itemBg:'transparent',
            itemLinkBg:'transparent',
          },
        },
      }}
    >
      <AntPagination
        showSizeChanger
        onShowSizeChange={limitHandler}
        onChange={pageHandler}
        defaultCurrent={1}
        total={1000}
        pageSize={limit}
        current={page}
        className="pagination"
      />

    </ConfigProvider>
    </>
  );
}

export default Pagination;