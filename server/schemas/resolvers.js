const { Patient, GlOrder, ClOrder } = require('../models')


const resolvers = {
    Query: {
        getPatient: async ( parent, {_id} ) => {
            return Patient.findOne({ _id: _id});
        },
        getGlOrders: async () => {
            const searchGls = GlOrder.find({});

            return searchGls;
        },
        getClOrders: async () => {
            const searchCls = ClOrder.find({});

            return searchCls;
        }
    },

    Mutation: {
        addPatient: async (parent, args) => {
            const patient = await Patient.create(args);

            return patient;
        },
    }
}

module.exports = resolvers;