"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vg_controls_1 = require("./vg-controls");
var vg_controls_hidden_1 = require("./../core/services/vg-controls-hidden");
var vg_api_1 = require("../core/services/vg-api");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
var vg_states_1 = require("../core/states/vg-states");
describe('Controls Bar', function () {
    var controls;
    var ref;
    var api;
    var hidden;
    beforeEach(function () {
        jasmine.clock().uninstall();
        jasmine.clock().install();
        api = new vg_api_1.VgAPI();
        hidden = new vg_controls_hidden_1.VgControlsHidden();
        ref = {
            nativeElement: {
                getAttribute: function (name) {
                    return name;
                }
            }
        };
        controls = new vg_controls_1.VgControls(api, ref, hidden);
    });
    afterEach(function () {
        jasmine.clock().uninstall();
    });
    it('Should have been defined', function () {
        expect(controls).toBeTruthy();
    });
    it('Should listen for mouseenter and mouseleave events', function () {
        spyOn(Observable_1.Observable, 'fromEvent').and.callThrough();
        var vgElem = document.createElement('vg-player');
        api.registerElement(vgElem);
        controls.ngOnInit();
        expect(Observable_1.Observable.fromEvent).toHaveBeenCalledWith(api.videogularElement, 'mousemove');
        expect(Observable_1.Observable.fromEvent).toHaveBeenCalledWith(api.videogularElement, 'touchstart');
    });
    it('Should hide controls after view init', function () {
        spyOn(controls, 'hide').and.callFake(function () { });
        controls.vgAutohide = true;
        controls.ngAfterViewInit();
        expect(controls.hide).toHaveBeenCalled();
    });
    it('Should show controls after view init', function () {
        spyOn(controls, 'show').and.callFake(function () { });
        controls.vgAutohide = false;
        controls.ngAfterViewInit();
        expect(controls.show).toHaveBeenCalled();
    });
    it('Should show controls', function () {
        spyOn(window, 'clearTimeout').and.callFake(function () { });
        spyOn(hidden, 'state').and.callFake(function () { });
        controls.show();
        expect(window.clearTimeout).toHaveBeenCalled();
        expect(controls.hideControls).toBe(false);
        expect(hidden.state).toHaveBeenCalledWith(false);
    });
    it('Should hide controls when is playing', function () {
        spyOn(hidden, 'state').and.callFake(function () { });
        controls.vgAutohide = true;
        api.medias = [{ state: vg_states_1.VgStates.VG_PLAYING }];
        controls.hide();
        jasmine.clock().tick(3100);
        expect(controls.hideControls).toBe(true);
        expect(hidden.state).toHaveBeenCalledWith(true);
    });
    it('Should not hide controls if player is paused', function () {
        controls.hideControls = false;
        controls.vgAutohide = false;
        controls.vgAutohide = true;
        api.medias = [{ state: vg_states_1.VgStates.VG_PAUSED }];
        controls.hide();
        jasmine.clock().tick(3100);
        expect(controls.hideControls).toBe(false);
    });
    it('Should not hide controls if autohide is false', function () {
        controls.hideControls = false;
        controls.vgAutohide = false;
        controls.hide();
        jasmine.clock().tick(3100);
        expect(controls.hideControls).toBe(false);
    });
    it('Should start hiding controls if media is playing', function () {
        spyOn(controls, 'hide').and.callFake(function () { });
        controls.vgAutohide = true;
        controls.onPlay();
        expect(controls.hide).toHaveBeenCalled();
    });
    it('Should show controls if media is paused', function () {
        spyOn(hidden, 'state').and.callFake(function () { });
        controls.vgAutohide = true;
        controls.onPause();
        expect(controls.hideControls).toBe(false);
        expect(hidden.state).toHaveBeenCalledWith(false);
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY29udHJvbHMuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLWNvbnRyb2xzLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBeUM7QUFDekMsNEVBQXVFO0FBRXZFLGtEQUE4QztBQUM5Qyw4Q0FBMkM7QUFFM0MseUNBQXVDO0FBQ3ZDLHNEQUFvRDtBQUVwRCxRQUFRLENBQUMsY0FBYyxFQUFFO0lBQ3JCLElBQUksUUFBbUIsQ0FBQztJQUN4QixJQUFJLEdBQWMsQ0FBQztJQUNuQixJQUFJLEdBQVMsQ0FBQztJQUNkLElBQUksTUFBd0IsQ0FBQztJQUU3QixVQUFVLENBQUM7UUFDUCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTFCLEdBQUcsR0FBRyxJQUFJLGNBQUssRUFBRSxDQUFDO1FBQ2xCLE1BQU0sR0FBRyxJQUFJLHFDQUFnQixFQUFFLENBQUM7UUFFaEMsR0FBRyxHQUFHO1lBQ0YsYUFBYSxFQUFFO2dCQUNYLFlBQVksRUFBRSxVQUFDLElBQUk7b0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQztpQkFDZjthQUNKO1NBQ0osQ0FBQztRQUVGLFFBQVEsR0FBRyxJQUFJLHdCQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMvQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUM7UUFDTixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDL0IsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBCQUEwQixFQUFFO1FBQzNCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNqQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0RBQW9ELEVBQUU7UUFDckQsS0FBSyxDQUFDLHVCQUFVLEVBQUUsV0FBVyxDQUFD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USxDQUFDLENBQUM7UUFFOUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFM0IsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRW5CLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEQsQ0FBQyxDQUFDO0NBQ04sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWZ0NvbnRyb2xzfSBmcm9tIFwiLi92Zy1jb250cm9sc1wiO1xuaW1wb3J0IHtWZ0NvbnRyb2xzSGlkZGVufSBmcm9tICcuLy4uL2NvcmUvc2VydmljZXMvdmctY29udHJvbHMtaGlkZGVuJztcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VmdBUEl9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnO1xuaW1wb3J0IHsgVmdTdGF0ZXMgfSBmcm9tICcuLi9jb3JlL3N0YXRlcy92Zy1zdGF0ZXMnO1xuXG5kZXNjcmliZSgnQ29udHJvbHMgQmFyJywgKCkgPT4ge1xuICAgIGxldCBjb250cm9sczpWZ0NvbnRyb2xzO1xuICAgIGxldCByZWY6RWxlbWVudFJlZjtcbiAgICBsZXQgYXBpOlZnQVBJO1xuICAgIGxldCBoaWRkZW46IFZnQ29udHJvbHNIaWRkZW47XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgamFzbWluZS5jbG9jaygpLnVuaW5zdGFsbCgpO1xuICAgICAgICBqYXNtaW5lLmNsb2NrKCkuaW5zdGFsbCgpO1xuXG4gICAgICAgIGFwaSA9IG5ldyBWZ0FQSSgpO1xuICAgICAgICBoaWRkZW4gPSBuZXcgVmdDb250cm9sc0hpZGRlbigpO1xuXG4gICAgICAgIHJlZiA9IHtcbiAgICAgICAgICAgIG5hdGl2ZUVsZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICBnZXRBdHRyaWJ1dGU6IChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb250cm9scyA9IG5ldyBWZ0NvbnRyb2xzKGFwaSwgcmVmLCBoaWRkZW4pO1xuICAgIH0pO1xuXG4gICAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICAgICAgamFzbWluZS5jbG9jaygpLnVuaW5zdGFsbCgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ1Nob3VsZCBoYXZlIGJlZW4gZGVmaW5lZCcsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KGNvbnRyb2xzKS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIGxpc3RlbiBmb3IgbW91c2VlbnRlciBhbmQgbW91c2VsZWF2ZSBldmVudHMnLCAoKSA9PiB7XG4gICAgICAgIHNweU9uKE9ic2VydmFibGUsICdmcm9tRXZlbnQnKS5hbmQuY2FsbFRocm91Z2goKTtcblxuICAgICAgICBsZXQgdmdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmctcGxheWVyJyk7XG5cbiAgICAgICAgYXBpLnJlZ2lzdGVyRWxlbWVudCh2Z0VsZW0pO1xuXG4gICAgICAgIGNvbnRyb2xzLm5nT25Jbml0KCk7XG5cbiAgICAgICAgZXhwZWN0KE9ic2VydmFibGUuZnJvbUV2ZW50KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChhcGkudmlkZW9ndWxhckVsZW1lbnQsICdtb3VzZW1vdmUnKTtcbiAgICAgICAgZXhwZWN0KE9ic2VydmFibGUuZnJvbUV2ZW50KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChhcGkudmlkZW9ndWxhckVsZW1lbnQsICd0b3VjaHN0YXJ0Jyk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIGhpZGUgY29udHJvbHMgYWZ0ZXIgdmlldyBpbml0JywgKCkgPT4ge1xuICAgICAgICBzcHlPbihjb250cm9scywgJ2hpZGUnKS5hbmQuY2FsbEZha2UoKCkgPT4ge30pO1xuXG4gICAgICAgIGNvbnRyb2xzLnZnQXV0b2hpZGUgPSB0cnVlO1xuXG4gICAgICAgIGNvbnRyb2xzLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXG4gICAgICAgIGV4cGVjdChjb250cm9scy5oaWRlKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIHNob3cgY29udHJvbHMgYWZ0ZXIgdmlldyBpbml0JywgKCkgPT4ge1xuICAgICAgICBzcHlPbihjb250cm9scywgJ3Nob3cnKS5hbmQuY2FsbEZha2UoKCkgPT4ge30pO1xuXG4gICAgICAgIGNvbnRyb2xzLnZnQXV0b2hpZGUgPSBmYWxzZTtcblxuICAgICAgICBjb250cm9scy5uZ0FmdGVyVmlld0luaXQoKTtcblxuICAgICAgICBleHBlY3QoY29udHJvbHMuc2hvdykudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ1Nob3VsZCBzaG93IGNvbnRyb2xzJywgKCkgPT4ge1xuICAgICAgICBzcHlPbih3aW5kb3csICdjbGVhclRpbWVvdXQnKS5hbmQuY2FsbEZha2UoKCkgPT4ge30pO1xuICAgICAgICBzcHlPbihoaWRkZW4sICdzdGF0ZScpLmFuZC5jYWxsRmFrZSgoKSA9PiB7fSk7XG5cbiAgICAgICAgY29udHJvbHMuc2hvdygpO1xuXG4gICAgICAgIGV4cGVjdCh3aW5kb3cuY2xlYXJUaW1lb3V0KS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgIGV4cGVjdChjb250cm9scy5oaWRlQ29udHJvbHMpLnRvQmUoZmFsc2UpO1xuICAgICAgICBleHBlY3QoaGlkZGVuLnN0YXRlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIGhpZGUgY29udHJvbHMgd2hlbiBpcyBwbGF5aW5nJywgKCkgPT4ge1xuICAgICAgICBzcHlPbihoaWRkZW4sICdzdGF0ZScpLmFuZC5jYWxsRmFrZSgoKSA9PiB7fSk7XG5cbiAgICAgICAgY29udHJvbHMudmdBdXRvaGlkZSA9IHRydWU7XG4gICAgICAgIGFwaS5tZWRpYXMgPSBbe3N0YXRlOiBWZ1N0YXRlcy5WR19QTEFZSU5HfV07XG5cbiAgICAgICAgY29udHJvbHMuaGlkZSgpO1xuXG4gICAgICAgIGphc21pbmUuY2xvY2soKS50aWNrKDMxMDApO1xuICAgICAgICBleHBlY3QoY29udHJvbHMuaGlkZUNvbnRyb2xzKS50b0JlKHRydWUpO1xuICAgICAgICBleHBlY3QoaGlkZGVuLnN0YXRlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh0cnVlKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgbm90IGhpZGUgY29udHJvbHMgaWYgcGxheWVyIGlzIHBhdXNlZCcsICgpID0+IHtcbiAgICAgICAgY29udHJvbHMuaGlkZUNvbnRyb2xzID0gZmFsc2U7XG4gICAgICAgIGNvbnRyb2xzLnZnQXV0b2hpZGUgPSBmYWxzZTtcblxuICAgICAgICBjb250cm9scy52Z0F1dG9oaWRlID0gdHJ1ZTtcbiAgICAgICAgYXBpLm1lZGlhcyA9IFt7c3RhdGU6IFZnU3RhdGVzLlZHX1BBVVNFRH1dO1xuXG4gICAgICAgIGNvbnRyb2xzLmhpZGUoKTtcblxuICAgICAgICBqYXNtaW5lLmNsb2NrKCkudGljaygzMTAwKTtcbiAgICAgICAgZXhwZWN0KGNvbnRyb2xzLmhpZGVDb250cm9scykudG9CZShmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIG5vdCBoaWRlIGNvbnRyb2xzIGlmIGF1dG9oaWRlIGlzIGZhbHNlJywgKCkgPT4ge1xuICAgICAgICBjb250cm9scy5oaWRlQ29udHJvbHMgPSBmYWxzZTtcbiAgICAgICAgY29udHJvbHMudmdBdXRvaGlkZSA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnRyb2xzLmhpZGUoKTtcblxuICAgICAgICBqYXNtaW5lLmNsb2NrKCkudGljaygzMTAwKTtcbiAgICAgICAgZXhwZWN0KGNvbnRyb2xzLmhpZGVDb250cm9scykudG9CZShmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIHN0YXJ0IGhpZGluZyBjb250cm9scyBpZiBtZWRpYSBpcyBwbGF5aW5nJywgKCkgPT4ge1xuICAgICAgICBzcHlPbihjb250cm9scywgJ2hpZGUnKS5hbmQuY2FsbEZha2UoKCkgPT4ge30pO1xuXG4gICAgICAgIGNvbnRyb2xzLnZnQXV0b2hpZGUgPSB0cnVlO1xuXG4gICAgICAgIGNvbnRyb2xzLm9uUGxheSgpO1xuXG4gICAgICAgIGV4cGVjdChjb250cm9scy5oaWRlKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIHNob3cgY29udHJvbHMgaWYgbWVkaWEgaXMgcGF1c2VkJywgKCkgPT4ge1xuICAgICAgICBzcHlPbihoaWRkZW4sICdzdGF0ZScpLmFuZC5jYWxsRmFrZSgoKSA9PiB7fSk7XG5cbiAgICAgICAgY29udHJvbHMudmdBdXRvaGlkZSA9IHRydWU7XG5cbiAgICAgICAgY29udHJvbHMub25QYXVzZSgpO1xuXG4gICAgICAgIGV4cGVjdChjb250cm9scy5oaWRlQ29udHJvbHMpLnRvQmUoZmFsc2UpO1xuICAgICAgICBleHBlY3QoaGlkZGVuLnN0YXRlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChmYWxzZSk7XG4gICAgfSk7XG59KTtcbiJdfQ==