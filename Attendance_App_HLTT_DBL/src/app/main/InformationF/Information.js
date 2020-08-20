import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent} from '@fuse';


const styles = theme => ({
    layoutRoot: {}
});

class Information extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-20 pl-60"><h2 className="h4new">EMPLOYEE INFORMATION</h2></div>
                }

                content={
                    <div className="p-24">
                        <DemoContent/>
                    </div>
                }

            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Information);