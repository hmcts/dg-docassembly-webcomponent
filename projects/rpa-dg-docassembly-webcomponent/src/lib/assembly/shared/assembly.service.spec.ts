import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AssemblyService } from './assembly.service';

describe('AssemblyService', () => {
  let assemblyService: AssemblyService;
  let httpMock: HttpTestingController;

  const templateName = 'template-name';

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
        AssemblyService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });

    assemblyService = TestBed.get(AssemblyService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([AssemblyService], (service: AssemblyService) => {
    expect(service).toBeTruthy();
  }));

  describe('getUIDefinition', () => {
    it('should fetch the ui definition from the url passed', function () {
      const uiDefinitionEndpoint = `http://localhost:9000/api/form-definitions/${btoa(templateName)}`;

      assemblyService.getUIDefinition(templateName).subscribe(resp => {
        expect(resp).toEqual(uiDefintion);
      });

      const req = httpMock.expectOne(uiDefinitionEndpoint);
      expect(req.request.method).toEqual('GET');
      req.flush(uiDefintion);

      httpMock.verify();
    });
  });

});
