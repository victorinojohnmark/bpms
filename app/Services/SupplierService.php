<?php

namespace App\Services;

use App\Filters\Api\SuppliersFilter;
use App\Http\Resources\Supplier\SupplierResource;
use App\Http\Resources\Supplier\SupplierCollection;
use App\Models\Supplier;

class SupplierService {
    
    public function index($request) 
    {
        $filter = new SuppliersFilter();
        $filterItems = $filter->transform($request);

        $suppliers = Supplier::where($filterItems)->latest();

        return new SupplierCollection($suppliers->paginate()->appends($request->query()));
    }

    public function show(Supplier $supplier)
    {
        return new SupplierResource($supplier);
    }

    public function store()
    {

    }

    public function update(Supplier $supplier)
    {
        
    }
}