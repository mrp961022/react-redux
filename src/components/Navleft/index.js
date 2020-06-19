import React,{ Component } from 'react';
import logo from '../../logo.svg';
import './index.less'
import MenuConfig from '../../config/menuConfig';
import { Menu } from 'antd';
const { SubMenu } =Menu;
export default class NavLeft extends Component{
    componentWillMount(){
      const menuTreeNode =  this.renderMenu(MenuConfig);
      this.setState({menuTreeNode});
    }
    renderMenu = (data) => {
        // 菜单渲染
        return data.map((item)=>{
            if(item.childern){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.childern)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        })
    }
    render(){
        return(
            <div>
                <div className="logo">
                    <img src={logo}></img>
                    <h1>Imoc MS</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                    {/* <SubMenu  title="Navigation One">
                        <Menu.Item key="1" >Option 1</Menu.Item>
                        <Menu.Item key="2" >Option 2</Menu.Item>
                        <Menu.Item key="3" >Option 3</Menu.Item>
                        <Menu.Item key="4" >Option 4</Menu.Item> 
                    </SubMenu> */}
                </Menu>
            </div>
        )
    }
}
