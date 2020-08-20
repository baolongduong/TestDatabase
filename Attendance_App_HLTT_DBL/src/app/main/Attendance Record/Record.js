import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent4} from '@fuse';

const styles = theme => ({
    layoutRoot: {}
});

class Record extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-20 pl-60"><h4 className = 'h4new'>ATTENDANCE RECORD</h4></div>
                }
                content={
                    <div className="p-24 pb-30">
                        <br/>
                        <DemoContent4/>
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Record);