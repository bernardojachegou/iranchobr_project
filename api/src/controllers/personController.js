const { pessoa } = require("../models");
const { handleCatchedError } = require("../utils");
const Yup = require("yup");

exports.get = async (req, res, next) => {
  try {
    const pessoas = await pessoa.findAll();
    console.log(pessoas);
    return res.json(pessoas);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aPessoa = await pessoa.findAll({
      where: {
        id: id,
      },
    });
    return res.json(aPessoa);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.post = async (req, res, next) => {
  try {
    const { no_pessoa, no_email, endereco, sexo, ic_ativo } = req.body;

    const data = {
      no_pessoa,
      no_email,
      endereco,
      sexo,
      ic_ativo,
    };

    const schema = Yup.object().shape({
      no_pessoa: Yup.string().required().min(6),
      no_email: Yup.string().required(),
      endereco: Yup.string().required().min(6),
      sexo: Yup.string().required().max(1),
      ic_ativo: Yup.boolean().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const aPessoa = await pessoa.create(data);
    return res.json(aPessoa);
  } catch (error) {
    handleCatchedError(res, error.message, 400);
  }
};

exports.put = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aPessoa = await pessoa.findByPk(id);

    if (!aPessoa) {
      return res.status(400).json({
        message: "Person not found!",
      });
    }

    const { no_pessoa, no_email, endereco, sexo, ic_ativo } = req.body;

    const data = {
      no_pessoa,
      no_email,
      endereco,
      sexo,
      ic_ativo,
    };

    const schema = Yup.object().shape({
      no_pessoa: Yup.string().required().min(6),
      no_email: Yup.string().required(),
      endereco: Yup.string().required().min(6),
      sexo: Yup.string().required(),
      ic_ativo: Yup.boolean().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    await pessoa.update(data, { where: { id } });
    return res.json({ updated: true });
  } catch (error) {
    handleCatchedError(res, error.message, 400);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aPessoa = await pessoa.findByPk(id);

    if (aPessoa) {
      aPessoa.destroy();
      return res.json({ deleted: true });
    }

    return res.status(400).json({
      deleted: false,
      message: "Entidade não encontrada.",
    });
  } catch (error) {
    handleCatchedError(res, error.message);
  }
};
