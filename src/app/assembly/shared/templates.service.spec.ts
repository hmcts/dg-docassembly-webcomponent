import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TemplatesService } from './templates.service';

describe('TemplatesService', () => {
  let templatesService: TemplatesService;
  let httpMock: HttpTestingController;

  const uiDefintion = [
    {
      'key': 'caseReference',
      'type': 'input',
      'hideExpression': null,
      'templateOptions': {
        'label': 'Case reference',
        'options': []
      },
      'fieldArray': null
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TemplatesService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });

    templatesService = TestBed.get(TemplatesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([TemplatesService], (service: TemplatesService) => {
    expect(service).toBeTruthy();
  }));

  it('should set the base url for the template', function () {
    const url = 'testUrl';
    templatesService.setBaseUrl(url);
    expect(templatesService.getBaseUrl()).toBe(url);
  });

  it('should set the get url for the template', function () {
    const url = 'testUrl';
    templatesService.setBaseUrl(url);
    const urlFromService = templatesService.getBaseUrl();
    expect(urlFromService).toBe(url);
  });

  describe('getTemplateUiDefinition', () => {
    it('should fetch the ui definition from the url passed', function () {
      const url = 'http://localhost/api/templates/document.docx/uiDefinition';

      templatesService.setBaseUrl(url);
      templatesService.getTemplateUiDefinition().subscribe((response) => {
        const responseObject = [].concat(JSON.parse(JSON.stringify(response)));
        expect(responseObject).toEqual(uiDefintion);
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toEqual('GET');
      req.flush(uiDefintion);

      httpMock.verify();
    });
  });

});
