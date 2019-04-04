import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {AssemblyService, ERROR} from './assembly.service';

describe('AssemblyService', () => {
  let assemblyService: AssemblyService;
  let httpMock: HttpTestingController;

  const templateName = 'template-name';
  const requestBody = {
    formPayload: {},
    outputType: 'PDF',
    templateId: btoa(templateName),
    renditionOutputLocation: null
  };

  const uiDefintion = [
    {
      'key': 'caseReference',
      'type': 'input',
      'templateOptions': {
        'label': 'Case reference',
      },
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssemblyService],
      imports: [HttpClientTestingModule]
    });

    assemblyService = TestBed.get(AssemblyService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should fetch the ui definition from the url passed', function () {

    assemblyService.getUIDefinition(templateName, '').subscribe(resp => {
      expect(resp).toEqual(uiDefintion);
    });

    const req = httpMock.expectOne(`api/form-definitions/${btoa(templateName)}`);
    expect(req.request.method).toEqual('GET');
    req.flush(uiDefintion);

    httpMock.verify();
  });

  it('should return empty definition in case of error', function () {

    assemblyService.getUIDefinition(templateName, '').subscribe(resp => {
      expect(resp).toEqual([]);
    });

    const req = httpMock.expectOne(`api/form-definitions/${btoa(templateName)}`);
    expect(req.request.method).toEqual('GET');
    req.flush({}, { status: 404, statusText: 'No UI definition for document id'});

    httpMock.verify();
  });

  it('should return url of generated document', function () {

    assemblyService.generateDocument('PDF', templateName, {}, null, '')
      .subscribe(resp => {
        expect(resp).toEqual('document-url');
    });

    const req = httpMock.expectOne('api/template-renditions');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(requestBody);
    req.flush({
      ...requestBody,
      renditionOutputLocation: 'document-url'
    });

    httpMock.verify();
  });

  it('should return ERROR in case of failure', function () {

    assemblyService.generateDocument('PDF', templateName, {}, null, '')
      .subscribe(resp => {
        expect(resp).toEqual(ERROR);
    });

    const req = httpMock.expectOne('api/template-renditions');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(requestBody);
    req.error(new ErrorEvent('error'));

    httpMock.verify();
  });
});
