import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent3} from '@fuse';


const styles = theme => ({
    layoutRoot: {}
});

class Settingtime extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-20 pl-60"><h4 className = 'h4new'>SETTING</h4></div>
                }
                content={
                    <div className="p-24">
                        <DemoContent3/>
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Settingtime);