import DialogMixin from './DialogMixin';
import DialogStoreMixin from './DialogStoreMixin';
import DialogsMixin from './DialogsMixin';
import FormMixin from './FormMixin';
import CheckListStoreMixin from './CheckListStoreMixin';
import InstanceTabsMixin from './InstanceTabsMixin';
import StoreFormMixin from './StoreFormMixin';
import LeftNavMixin from './LeftNavMixin';
import MousetrapMixin from './MousetrapMixin';
import StoreLoadingMixin from './StoreLoadingMixin';
import WaitForStoreMixin from './WaitForStoreMixin';
import StoreHelpersMixin from './StoreHelpersMixin';
import IsLoadingMixin from './IsLoadingMixin';

let Mixins = {};

Mixins.Dialog = DialogMixin;
Mixins.Dialogs = DialogsMixin;
Mixins.DialogStore = DialogStoreMixin;
Mixins.Form = FormMixin;
Mixins.CheckListStore = CheckListStoreMixin;
Mixins.InstanceTabs = InstanceTabsMixin;
Mixins.LeftNav = LeftNavMixin;
Mixins.Mousetrap = MousetrapMixin;
Mixins.StoreForm = StoreFormMixin;
Mixins.StoreLoading = StoreLoadingMixin;
Mixins.WaitForStore = WaitForStoreMixin;
Mixins.StoreHelpers = StoreHelpersMixin;
Mixins.IsLoading = IsLoadingMixin;

export default Mixins;
