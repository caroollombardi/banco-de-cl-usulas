window.BC_CONFIG = {

  // Painel do Supabase → botão Connect → aba Framework → bloco .env.local
  // É o valor depois de ..._ANON_KEY= ou ..._PUBLISHABLE_KEY=
  // Começa com sb_publishable_ ou com eyJ
  ANON: "sb_publishable_DPwHQV1mYj87959vFQMyFQ_gxPJZyts",

  // URL do projeto. Já preenchida; só mude se trocar de projeto no Supabase.
  URL: "https://hvlqksetivptxsasoteb.supabase.co",

  // "senha"      → e-mail + senha criada por você no painel. É o modo em uso.
  // "magic_link" → link por e-mail. Exige SMTP próprio configurado; o serviço
  //                embutido do Supabase só entrega para a equipe do projeto.
  // "aberto"     → senha única compartilhada + nome de uma lista. Exige a
  //                migração 002. Autoria declarada, não verificada.
  MODO: "senha",

  // Só usado quando MODO = "aberto".
  SENHA: "trocar-esta-senha"

};
