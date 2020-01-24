import {savePDF} from '@progress/kendo-react-pdf';

class DocSevice {
    createPdf = (html) => {
        savePDF(html, {
            paperSize: 'Letter',
            fileName: 'styleguide.pdf',
            margin: 3
        })
    }
}

const Doc = new DocSevice();
export default Doc;