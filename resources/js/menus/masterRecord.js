import { useNavStore } from '../stores/useNavStore';


const menuMasterRecord =  {
    groupName: "MASTER RECORDS",
    links: [
        {
            name: 'masterrecords',
            title: 'Dashboard',
            path: '/masterrecords',
        },
        {
            name: 'suppliers',
            title: 'Suppliers',
            path: '/suppliers',
        },
        {
            name: 'contractors',
            title: 'Contractors',
            path: '/contractors',
        }
    ]
}

export default menuMasterRecord