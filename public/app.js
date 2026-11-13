import Item from './classes/models/Item.js'
import ItemRepository from './classes/models/ItemRepository.js'
import ToolbarView from './classes/views/ToolbarView.js'
import FormView from './classes/views/FormView.js'
import TableView from './classes/views/TableView.js'
import FilterView from './classes/views/FilterView.js'
import FilterService from './classes/models/FilterService.js'
import SortService from './classes/models/SortService.js'
import AppController from './classes/controllers/AppController.js'

const repository = new ItemRepository();
const toolbar = new ToolbarView();
const form = new FormView();
const table = new TableView();
const filterForm = new FilterView();
const filterService = new FilterService();
const sortService = new SortService();
const controller = new AppController(repository, toolbar, form, table, filterForm, filterService, sortService);
controller.init();
