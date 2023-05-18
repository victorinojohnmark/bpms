<?php

namespace App\Filters\Api;

use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class SuppliersFilter extends ApiFilter {

    protected $safeParms = [
        'code' => ['eq'],
        'name' => ['eq'],
        'contactPerson' => ['eq'],
        'contactNumber' => ['eq'],
        'email' => ['eq'],
        'state' => ['eq'],
        'postalCode' => ['eq', 'gt', 'lt']
    ];

    protected $columnMap = [
        'postalCode' => 'postal_code',
        'contactPerson' => 'contact_person',
        'contactNumber' => 'contact_number'
    ];

    // protected $operatorMap = [
    //     'eq' => '=',
    //     'lt' => '<',
    //     'lte' => '<=',
    //     'gt' => '>',
    //     'gte' => '>=',
    //     'ne' => '!='
    // ];


}