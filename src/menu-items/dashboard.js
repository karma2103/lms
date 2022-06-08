// assets
import HomeIcon from '@mui/icons-material/Home';

// constant
const icons = { HomeIcon };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.HomeIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
