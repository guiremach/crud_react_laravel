<?php

namespace App\Http\Controllers\Api;

use App\Clientes;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ClientesController extends Controller
{
    //
	public function getAllClientes() {
      $clientes = Clientes::get()->toJson(JSON_PRETTY_PRINT);
      return response($clientes, 200);
    }

	public function getClientes($id) {
		if (Clientes::where('id', $id)->exists()) {
			$clientes = Clientes::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
			return response($clientes, 200);
		} else {
			return response()->json([
				"message" => "Clientes not found"
			], 404);
		}
    }

	public function createClientes(Request $request) {
		$clientes = new Clientes;
		$clientes->nome = $request->nome;
		$clientes->email = $request->email;
		$clientes->telefone = $request->telefone;
		$clientes->save();

		return response()->json([
			"message" => "Clientes record created"
		], 201);
	}

	public function updateClientes(Request $request, $id) {
		if (Clientes::where('id', $id)->exists()) {
			$clientes = Clientes::find($id);

			$clientes->nome = is_null($request->nome) ? $clientes->nome : $request->nome;
			$clientes->email = is_null($request->email) ? $clientes->email : $request->email;
			$clientes->telefone = is_null($request->telefone) ? $clientes->telefone : $request->telefone;
			$clientes->save();

			return response()->json([
				"message" => "records updated successfully"
			], 200);
		} else {
			return response()->json([
				"message" => "Clientes not found"
			], 404);
		}
	}

	public function deleteClientes ($id) {
		if(Clientes::where('id', $id)->exists()) {
            $clientes = Clientes::find($id);
            $clientes->delete();

			return response()->json([
				"message" => "records deleted"
			], 202);
		} else {
			return response()->json([
				"message" => "Cliente not found"
			], 404);
		}
	}
}
