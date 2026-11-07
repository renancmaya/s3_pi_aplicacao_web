import Item from './classes/models/Item.js'
import ItemRepository from './classes/models/ItemRepository.js'
import FormView from './classes/views/FormView.js'
import TableView from './classes/views/TableView.js'
import FilterView from './classes/views/FilterView.js'
import FilterService from './classes/models/FilterService.js'
import AppController from './classes/controllers/AppController.js'

const repository = new ItemRepository();
const form = new FormView();
const table = new TableView();
const filterForm = new FilterView();
const filterService = new FilterService();
const controller = new AppController(repository, form, table, filterForm, filterService);
controller.init();
