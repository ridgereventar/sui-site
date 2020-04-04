export const DEFAULT_FONTS = {
    arial: {
        id: 'arial',
        title: 'Arial',
        weights: [700,500,300]
    },
    avenirnext: {
        id: 'avenir',
        title: 'Avenir Next',
        weights: [700,500,300]
    },
    calibri: {
        id: 'calibri',
        title: 'Calibri',
        weights: [700,500,300] 
    },
    cambria: {
        id: 'cambria',
        title: 'Cambria',
        weights: [700,500,300]
    }, 
    courierNew: {
        id: 'courierNew', 
        title: 'Courier New',
        weights: [700,500,300]
    },
    georgia: {
        id: 'georgia', 
        title: 'Georgia',
        weights: [700,500,300]
    },  
    helvetica: {
        id: 'helvetica',
        title: 'Helvetica',
        weights: [700,500,300]
    },
    rockwell: {
        id: 'rockwell',
        title: 'Rockwell',
        weights: [700,500,300]
    },
    verdana: {
        id: 'verdana',
        title: 'Verdana',
        weights: [700,500,300]

    }
 }

 

export const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: 'black',
        fontFamily: state.label,
        padding: 5
    }),
    control: base => ({
        ...base,
        minHeight: 20,
        marginBottom: '8px'
    }),
    dropdownIndicator: base => ({
        ...base,
        padding: 2
    }),
    valueContainer: base => ({
        ...base,
        padding: '0px 1px'
    }),
    input: base => ({
        ...base,
        margin: 0,
        padding: 0
    }),
}

