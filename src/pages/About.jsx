import { CheckOutlined}  from '@ant-design/icons'
import { List, ConfigProvider } from "antd"
import '../assets/styles/about.scss'
import '../assets/styles/layout.scss'

const data = [
  {
    text: 'Build: Vite',
  },
  {
    text: 'UI lib: AntD',
  },
  {
    text: 'State Manager: Zustand',
  },
  {
    text: 'CSS extension: SCSS',
  },
  {
    text: 'Validation: Yup',
  },
  {
    text: 'Routing: React Router',
  },
  {
    text: 'Markdown render: React-markdown',
  },
];

function About() {
  return (
    <div className='layout about'>
      <h1>
        This is a React/JS pet-project
      </h1>
      <ConfigProvider
        theme={{
          token:{
            colorBorder:'#012869',
            colorText:'#012869',
            fontSize:16,
            borderRadiusLG:0,
          },
          components: {
            List: {
              descriptionFontSize:16,
              colorSplit:'#012869',
              headerBg:'#EE715D',
            },
          },
        }}
      >
        <List
          header={<b>Development tools</b>}
          bordered={true}
          dataSource={data}
          className='about__list'
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<CheckOutlined />}
                description={<p className='about__list-item'>{item.text}</p>}
              />
            </List.Item>
          )}
        />
      </ConfigProvider>
    </div>
  );
}

export default About;