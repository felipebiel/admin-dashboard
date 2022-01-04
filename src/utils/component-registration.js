// Components
import CardInfo from '@/components/custom/CardInfo';
import CardComponent from '@/components/custom/CardComponent';
import TitleBar from '@/components/custom/TitleBar';
import ButtonComponent from '@/components/custom/ButtonComponent';
import TableComponent from '@/components/custom/TableComponent';
import ModalComponent from '@/components/custom/ModalComponent';
export default (app) => {
    app.component('fb-card-info', CardInfo);
    app.component('fb-card', CardComponent);
    app.component('fb-title-bar', TitleBar);
    app.component('fb-button', ButtonComponent);
    app.component('fb-table', TableComponent);
    app.component('fb-modal', ModalComponent);
};
