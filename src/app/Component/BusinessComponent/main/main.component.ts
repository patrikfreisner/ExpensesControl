import { Component, OnInit } from '@angular/core';
import { PrmFormBase } from 'src/app/Model/Platform/prm-form-base';
import { LocationService } from 'src/app/Service/BusinessService/location.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  baseQuestions: PrmFormBase<any>[] = [];
  countryValues: { label: string, value: string }[] = [];
  cityValues: { label: string, value: string }[] = [];

  constructor(
    public locationService: LocationService
  ) {
    this.baseQuestions = this.customerFormBuild();
    //this.baseQuestions = this.companyFormBuild();

    this.loadCountryData();
  }

  ngOnInit(): void {
  }

  customerFormBuild(): PrmFormBase<any>[] {
    let customerFormArray: PrmFormBase<any>[] = [
      new PrmFormBase({ //to_be_called
        label: "Como quer ser chamado(a)?",
        key: "to_be_called",
        type: "select",
        options: [
          {
            label: "Sr.",
            value: "sr"
          },
          {
            label: "Sra.",
            value: "sra"
          }
        ],
        required: true,
        size: 12,
        order: 1
      }),
      new PrmFormBase({ //personal_number
        label: "CPF",
        key: "personal_number",
        type: "text",
        mask: "000.000.000-00",
        inputMode: "number",
        required: true,
        size: 12,
        order: 2
      }),
      new PrmFormBase({ //birthdate
        label: "Data de aniversário",
        key: "birthdate",
        type: "text",
        inputMode: "number",
        mask: "00/00/0000",
        required: true,
        size: 12,
        order: 3
      }),
      new PrmFormBase({ //phone
        label: "Contato",
        key: "phone",
        type: "text",
        inputMode: "number",
        mask: "(00) 00000-0000||(00) 0000-0000",
        required: true,
        size: 12,
        order: 4
      }),
      new PrmFormBase({ //FormGroup / address
        label: "Informações de entrega/retirada",
        key: "address",
        type: "nestedFormGroup",
        size: 12,
        order: 5,
        nestedQuestions: [
          new PrmFormBase({ //zip_code
            label: "CEP",
            key: "zip_code",
            type: "text",
            inputMode: "number",
            mask: "00000-000",
            required: true,
            order: 1,
            size: 12
          }),
          new PrmFormBase({ //street
            label: "Endereço",
            key: "street",
            type: "text",
            required: true,
            order: 2,
            size: 12
          }),
          new PrmFormBase({ //state
            label: "Estado",
            key: "state",
            type: "select",
            options: this.countryValues,
            required: true,
            order: 3,
            size: 4,
          }),
          new PrmFormBase({ //city
            label: "Cidade",
            key: "city",
            type: "select",
            options: this.cityValues,
            onInputInit: function (that: any) {
              that.form.controls.state.valueChanges.subscribe((item: string) => {
                that.form.controls.city.disable(true);

                that.localService.getStateCity(item).subscribe(
                  (response: any) => {
                    let cityArray: [any?] = [];
                    let orderedArray = response.body;

                    orderedArray.sort((obj1: any, obj2: any) => {
                      if (obj1.nome > obj2.nome) {
                        return 1;
                      }
                      if (obj1.nome < obj2.nome) {
                        return -1;
                      }
                      return 0;
                    });

                    orderedArray.forEach((element: any) => {
                      cityArray.push({
                        label: element.nome,
                        value: element.nome.toLowerCase()
                      });
                    });

                    that.form.controls.city.enable(true);
                    that.question.options = cityArray;
                  }
                );
              });
            },
            required: true,
            order: 4,
            size: 8
          }),
        ]
      })
    ];

    return customerFormArray;
  }

  // companyFormBuild(): PrmFormBase<any>[] {
  //   let companyFormArray: PrmFormBase<any>[] = [
  //     new PrmFormBase({
  //       label: "Nome fantasia",
  //       key: "name",
  //       type: "text",
  //       required: true,
  //       size: 12,
  //       order: 1
  //     }),
  //     new PrmFormBase({
  //       label: "Razão social",
  //       key: "internal_name",
  //       type: "text",
  //       required: true,
  //       size: 12,
  //       order: 2
  //     }),
  //     new PrmFormBase({
  //       label: "Slogan",
  //       key: "short_description",
  //       type: "text",
  //       required: true,
  //       size: 12,
  //       order: 3
  //     }),
  //     new PrmFormBase({
  //       label: "Descrição da empresa",
  //       key: "description",
  //       type: "text",
  //       required: true,
  //       size: 12,
  //       order: 4
  //     }),
  //     new PrmFormBase({
  //       label: "Tipo de serviço",
  //       key: "service_type",
  //       type: "text",
  //       required: true,
  //       size: 12,
  //       order: 5
  //     }),
  //     new PrmFormBase({
  //       label: "Contato",
  //       key: "phone",
  //       type: "text",
  //       mask: "(00) 00000-0000||(00) 0000-0000",
  //       inputMode: "number",
  //       required: true,
  //       size: 12,
  //       order: 6
  //     }),
  //     new PrmFormBase({
  //       label: "Data de fundação",
  //       key: "foundation_date",
  //       type: "text",
  //       mask: "00/00/0000",
  //       inputMode: "number",
  //       required: true,
  //       size: 12,
  //       order: 7
  //     }),
  //     new PrmFormBase({
  //       label: "CNPJ",
  //       key: "registered_number",
  //       type: "text",
  //       mask: "CPF_CNPJ",
  //       inputMode: "number",
  //       required: true,
  //       size: 12,
  //       order: 8
  //     }),
  //     new PrmFormBase({ //FormGroup / address
  //       label: "Endereço",
  //       key: "address",
  //       type: "nestedFormGroup",
  //       size: 12,
  //       order: 9,
  //       nestedQuestions: [
  //         new PrmFormBase({ //zip_code
  //           label: "CEP",
  //           key: "zip_code",
  //           type: "text",
  //           inputMode: "number",
  //           mask: "00000-000",
  //           required: true,
  //           order: 1,
  //           size: 12
  //         }),
  //         new PrmFormBase({ //street
  //           label: "Endereço",
  //           key: "street",
  //           type: "text",
  //           required: true,
  //           order: 2,
  //           size: 12
  //         }),
  //         new PrmFormBase({ //state
  //           label: "Estado",
  //           key: "state",
  //           type: "select",
  //           options: [{ key: "bla", value: "blabla" }],
  //           required: true,
  //           order: 3,
  //           size: 4,
  //         }),
  //         new PrmFormBase({ //city
  //           label: "Cidade",
  //           key: "city",
  //           type: "select",
  //           options: [
  //             {
  //               key: "Jaraguá do Sul",
  //               value: "jgua"
  //             },
  //             {
  //               key: "Capanema",
  //               value: "capanema"
  //             }
  //           ],
  //           required: true,
  //           order: 4,
  //           size: 8
  //         }),
  //       ]
  //     }),
  //     new PrmFormBase({ //FormGroup / delivery_info
  //       label: "Entrega",
  //       key: "delivery_info",
  //       type: "nestedFormGroup",
  //       size: 12,
  //       order: 10,
  //       nestedQuestions: [
  //         new PrmFormBase({ //delivery_tax
  //           label: "Taxa de entrega (região)",
  //           key: "delivery_tax",
  //           type: "number",
  //           required: true,
  //           order: 1,
  //           size: 12
  //         }),
  //         new PrmFormBase({ //min_delivery
  //           label: "Tempo minimo de entrega",
  //           key: "min_delivery",
  //           type: "number",
  //           required: true,
  //           order: 2,
  //           size: 6
  //         }),
  //         new PrmFormBase({ //max_delivery
  //           label: "Tempo maximo de entrega",
  //           key: "max_delivery",
  //           type: "number",
  //           required: true,
  //           order: 3,
  //           size: 6
  //         })
  //       ]
  //     }),
  //     new PrmFormBase({
  //       label: "URL da logo da empresa",
  //       key: "logo",
  //       type: "text",
  //       inputMode: "url",
  //       required: true,
  //       size: 12,
  //       order: 11
  //     }),
  //     new PrmFormBase({
  //       label: "Cor de fundo da logo",
  //       key: "logo_bg",
  //       type: "text",
  //       inputMode: "url",
  //       required: true,
  //       size: 12,
  //       order: 12
  //     })
  //   ];

  //   return companyFormArray;
  // }

  onSubmit(event: any) {
    console.log(">>> Form end: ");
    console.log(event);
  }

  loadCountryData() {
    // Set country values;
    this.locationService.getBrazilCountry().subscribe(
      (response) => {
        let countryArray: any[] = [];
        let orderedArray = response.body;

        orderedArray.sort((obj1: any, obj2: any) => {
          if (obj1.nome > obj2.nome) {
            return 1;
          }
          if (obj1.nome < obj2.nome) {
            return -1;
          }
          return 0;
        });

        orderedArray.forEach((element: any) => {
          countryArray.push({
            label: element.nome,
            value: element.sigla
          });
        });

        this.countryValues = countryArray;

        this.loadCityFromCountryData("AC");
      }
    );
  }

  loadCityFromCountryData(sigla: string) {
    this.locationService.getStateCity(sigla).subscribe(
      (response) => {
        let cityArray: [any?] = [];
        let orderedArray = response.body;

        orderedArray.sort((obj1: any, obj2: any) => {
          if (obj1.nome > obj2.nome) {
            return 1;
          }
          if (obj1.nome < obj2.nome) {
            return -1;
          }
          return 0;
        });

        orderedArray.forEach((element: any) => {
          cityArray.push({
            label: element.nome,
            value: element.nome.toLowerCase()
          });
        });

        this.cityValues = cityArray;

        this.baseQuestions = this.customerFormBuild();
      }
    );
  }

}
