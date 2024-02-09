import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSplitDragPaneComponent } from './ngx-split-drag-pane.component';

describe('NgxSplitDragPaneComponent', () => {
	let component: NgxSplitDragPaneComponent;
	let fixture: ComponentFixture<NgxSplitDragPaneComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NgxSplitDragPaneComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(NgxSplitDragPaneComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
