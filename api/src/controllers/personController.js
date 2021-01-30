const { person } = require("../models");
const {
  handleCatchedError,
  getPagination,
  getPagingData,
} = require("../utils");
const Yup = require("yup");

exports.get = async (req, res, next) => {
  try {
    const people = await person.findAll();

    if (people == 0) {
      return res.status(200).json({
        message: "The table is empty!",
      });
    }

    return res.status(200).json(people);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getAndCount = async (req, res, next) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);
  try {
    await person
      .findAndCountAll({
        limit,
        offset,
      })
      .then((data) => {
        const people = getPagingData(data, page, limit);
        res.send(people);
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aPerson = await person.findByPk(id);

    if (!aPerson) {
      return res.status(400).json({
        message: "Person not found!",
      });
    }

    return res.status(200).json(aPerson);
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

    const aPerson = await person.create(data);
    return res.status(200).json(aPerson);
  } catch (error) {
    handleCatchedError(res, error.message, 400);
  }
};

exports.put = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aPerson = await person.findByPk(id);

    if (!aPerson) {
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

    await person.update(data, { where: { id } });
    return res.status(200).json({ updated: true });
  } catch (error) {
    handleCatchedError(res, error.message, 400);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aPerson = await person.findByPk(id);

    if (!aPerson) {
      return res.status(400).json({
        deleted: false,
        message: "Couldn't delete: Person not found!",
      });
    }

    aPerson.destroy();
    return res.status(200).json({ deleted: true });
  } catch (error) {
    handleCatchedError(res, error.message);
  }
};
