export interface LugarInfoWS{ //segunda pantalla (parte 1)
    xid: string;
    name: string;
    
}


export interface LugarWS{ //primera pantalla (1)
    type: string
    id: string
    properties: LugarInfoWS
}


export interface ResultadoWSugerencias {//primera pantalla (2)
    type: string
    features: LugarWS[]
}

export interface DireccionWS {  //segunda pantalla parte 3
    city: string
    state: string
    country: string
}

export interface PreviewWS{  //segunda pantalla parte 4
    source: string
    
}

export interface ResultadoWSDetalle{ //segunda pantalla parte 2
    xid: string
    name: string
    address: DireccionWS[]
    preview: PreviewWS
}
